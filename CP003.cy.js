describe('Buscamos el 3er item de la lista y comprobamos que no tenga 60 cuotas sin interes', () => {
  it('Buscamos el 3er item de la lista y comprobamos que no tenga 60 cuotas sin interes', () => {
    cy.viewport('iphone-x');
    cy.visit('https://tiendaonline.movistar.com.ar');
    
    cy.get('.product-item').eq(2).screenshot('Screen 1', {capture: 'viewport'}).click();//<---- Seleccionamos el 3er item de la lista, como los indices van del 0,1,2,3... el 2 es el correcto dentro del <li></li>


    //<---- Seleccionamos la calculadora de cuotas// 
     cy.get('#open-installments-modal').screenshot('Screen 2', {capture: 'viewport'}).click({force:true});
    //<---- Hacemos click en la flecha de seleccion de Banco//
     cy.get('#banksArrow').click({force:true});
    //<---- Seleccionamos el banco Credicoop//  
     cy.get('#ui-id-2 > :nth-child(19)').click({force:true});
     cy.screenshot('Screen 3', {capture: 'viewport'});
    //<---- Hacemos click en la flecha de seleccion de tarjeta//
     cy.get('#cardsArrow').click({force:true});
    //<---- Seleccionamos la tarjeta visa//   
     cy.get('[data-card="Visa"]').click({force:true});
     cy.screenshot('Screen 4', {capture: 'viewport'});
    //<---- Hacemos click en el boton de Calcular cuotas//
     cy.get('#calculate_btn > .btn-primary').click({force:true});
   
    //<---- Comprobamos si el texto "60 cuotas" se encuentra presente en el display de resultados/
      cy.get('#modal-content-6').should('not.contain', '60 cuotas');
      cy.wait(10000);
      cy.screenshot('Screen 6', {capture: 'viewport'});
  });
});