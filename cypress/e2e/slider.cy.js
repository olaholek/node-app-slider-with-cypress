describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can navigate slides using navigation buttons"', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');

    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('not.contain', 'United Kingdom');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if each description is correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});

describe('Swiper Gallery Responsive Test', function () {
  it('Checks if gallery behaves correctly on different devices', function () {
    cy.viewport('macbook-15');
    cy.visit('http://localhost:3000');
    cy.wait(2000);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');

    cy.viewport('ipad-2');
    cy.reload();
    cy.wait(2000);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');

    cy.viewport('iphone-6');
    cy.reload();
    cy.wait(2000);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');

  });
});