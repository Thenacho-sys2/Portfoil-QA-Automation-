describe('Movistar A15', () => {
  it('Comprobar si puede ser pagado en 3 cuotas con cualquier tarjeta y/o banco', () => {
    cy.viewport('iphone-x');
    // ingresamos a la web de tienda online movistar en Chrome//
    cy.visit('https://tiendaonline.movistar.com.ar/'); 
    //  hacemos click en la publicacion del producto en base a su id //
    cy.screenshot('Screen 1', {capture: 'viewport'});
    cy.get('ol > [data-id="18583"] > a > .product-item-name > .name').click(); 
    cy.screenshot('Screen 2', {capture: 'viewport'});
    //Hacemos click en el boton de"Calcular Cuotas"
    cy.get('#open-installments-modal').click();

    cy.get('#inputbank').click();
    cy.get('#banksArrow').click({force:true});
    //Creamos 2 constantes auxiliares que nos serviran para settear los valores limite de nuestra variable// 
    //Los valores fueron extraidos manualmente dentro del DOM de la pagina//
    const minId = 3;
    const maxId = 44;
    //Creamos una nueva constante llamada "idAleatorio" le pedimos que seleccione un valor random dentro del array cuyos valores hemos preestablecido de antemano 
    const idAleatorio = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
    cy.get('.ui-menu-item:nth-child(' + idAleatorio + ')').click({force:true});
    cy.screenshot('Screen 3', {capture: 'viewport'});
    //Hacemos click en el selector de tarjetas//
    cy.get('#cardSelector').click()
    .then(() => {
    //Hacemos click en la flecha de Tarjetas//  
    cy.get('#cardsArrow').click({force:true});
    //Seleccionamos tarjeta en base al banco ya previamente elegido de manera random//
    cy.screenshot('Screen 4', {capture: 'viewport'});
    //Este paso es para convertir las opciones de tarjetas en un array y poder elegir entre ellos uno de manera aleatoria// 
    cy.get('#selectCardByBank > ul > li')
       //El "$options" levanta las opciones desplegadas//
      .then($options =>{
        //Guardamos las opciones en "options" como un array //
        const options= $options.toArray();
        //Le pedimos que elija un valor dentro del array de manera aleatoria//
        const IndiceAleatorio = Math.floor(Math.random() * options.length);
        //Guardamos la opcion elegida en "randomOptions"//
        const OpcionAleatoria = options[IndiceAleatorio];

        //Elegimos el valor que guardamos en la constante y hacemos clic en ella//
        //La idea es transformar el valor en un elemento que Cypress pueda manipular//
        cy.wrap(OpcionAleatoria).click({force:true});
        cy.screenshot('Screen 5', {capture: 'viewport'});
        //Hacemos click en el boton "Calcular Cuotas"//
        cy.get('#calculate_btn > .btn-primary').click();
        //Comprobamos que el texto "3 cuotas sin interes"se encuentre entre los resultados//
        cy.get(':nth-child(2) > td').contains('3 cuotas sin interés de').should('be.visible');
        cy.screenshot('Screen 6', {capture: 'viewport'});

    });
  });
 });
});