describe("example Component", () => {
  test("Debe de ser > a 10", () => {
    // Arreglar
    let value = 10
    
    // Estimulo
    value = value + 2
    
    // Observar el resultado
    expect(value).toBeGreaterThan(10)

  });

});
