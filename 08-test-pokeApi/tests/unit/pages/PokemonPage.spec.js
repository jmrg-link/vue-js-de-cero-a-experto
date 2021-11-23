import { shallowMount, mount } from "@vue/test-utils";
import {pokemons} from '../mocks/pokemons.mock'
import PokemonPage from "@/pages/PokemonPage";

describe("PokemonPage component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar al mixPokemonArray al montar ", () => {
    const mixPokemonArray = jest.spyOn(PokemonPage.methods, "mixPokemonArray");
    shallowMount(PokemonPage);
    expect(mixPokemonArray).toHaveBeenCalled();
  });

  test("debe hacer match cuando cargan los pokemons", () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        }
      }
    })
    console.log(pokemons[0]);
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar los componentes de pokemonpicture y pokemonoptions ', () => {
    const wrapper = shallowMount(PokemonPage, {
        data() {
          return {
            pokemonArr: pokemons,
            pokemon: pokemons[0],
            showPokemon: false,
            showAnswer: false,
            message: "",
          }
        }
      })

      const picture = wrapper.find('pokemon-picture-stub')
      const options = wrapper.find('pokemon-options-stub')

      expect(picture.exists() ).toBeTruthy()
      expect(options.exists() ).toBeTruthy()

      expect(picture.attributes('pokemonid')).toBe('5')
      expect(options.attributes('pokemons')).toBeTruthy()



      //PokemonOptions attribute pokemons toBe true
  })

  test('test con checkAnswer ', async() => {
    const wrapper = shallowMount(PokemonPage, {
        data() {
          return {
            pokemonArr: pokemons,
            pokemon: pokemons[0],
            showPokemon: false,
            showAnswer: false,
            message: "",
          }
        }
      })

     // console.log(wrapper.vm)
    await wrapper.vm.checkAnswer(5)
    //console.log(wrapper.find('h2').text()) 
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBe(true)
    expect(wrapper.find('h2').text()).toBe(`Correcto , ${pokemons[0].name}`)

    await wrapper.vm.checkAnswer(10)
    expect(wrapper.vm.message).toBe(`Nooop.. el pokemon era ${pokemons[0].name}`)
  })

})
