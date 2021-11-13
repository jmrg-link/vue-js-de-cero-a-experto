import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision component", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });

  test("1ª Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("2ª Escribir en el input no debe disparar nada ", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hola mundo");
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test('3ª Esribir el simbolo de "?" debe de disparar el getAnswer ', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("test?");
    expect(clgSpy).toHaveBeenCalledTimes(2);
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("4ª Pruebas en getAnswer ", async () => {
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Sii!");
  });

  test("5ª Pruebas en getAnswer - Fallo de la API ", async () => {
    //TODO: fallo en el api
    fetch.mockImplementationOnce(() => Promise.reject("API is down "));
    await wrapper.vm.getAnswer();
    const img = wrapper.find("img");
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("No se pudo mostrar la API");
  });
});
