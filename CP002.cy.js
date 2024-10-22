describe('Seleccion del filtros para los dispositivos ', () => {
  it('passes', () => {
     // Seteamos las dimensiones de pantalla estilo iphone-x//
    cy.viewport('iphone-x');
     // ingresamos a la web de tienda online movistar en Chrome//
    cy.visit('https://tiendaonline.movistar.com.ar');

    cy.screenshot('Screen 1', {capture: 'viewport'});
    //<------ Seleccionamos el boton de filtros//
    cy.get('.block-subtitle').click();
    cy.screenshot('Screen 2', {capture: 'viewport'});
    //<------ Buscamos el filtro de 0 a 300k de pesos// 
    cy.get('.memory > .filter-title').click();
    cy.screenshot('Screen 3', {capture: 'viewport'});
    //<------ Seleccionamos el boton de filtro de 0 a 300k de pesos// 
    cy.get('[data-value="802"] > a').click();
    cy.screenshot('Screen 4', {capture: 'viewport'});
    //<------ Seleccionamos el boton de filtros//
    cy.get('.block-subtitle').click();
    cy.screenshot('Screen 5', {capture: 'viewport'});
    //<------ Seleccionamos el filtro de 128GB//
    cy.get('[data-value="0_300000"] > a').screenshot('Screen 6', {capture: 'viewport'}).click();
    //<------ Buscamos el objeto que contenga la cantidad de resultados luego de aplicados los filtros.//
    cy.get('.total-products > p').should('be.visible').screenshot('Screen 7', {capture: 'viewport'});
    cy.screenshot('Screen 8', {capture: 'viewport'});
    
  });
});