describe('smartjuan24-dolores', () => {

    it('Navigate to eodb-dev.ml', () => {
    // cy.visit('https://eodb-dev.ml/app')
    cy.visit('http://192.168.1.114:8080/app')
})
it('register', () => {
cy.get(':nth-child(7) > .ant-btn').click()
cy.get('.account-form > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Antonio', { delay: 100 });
cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Basas', { delay: 100 });
cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('antoniobasasjr@gmail.com' , { delay: 100 });
cy.get(':nth-child(3) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('1234567890' , { delay: 100 });
cy.get(':nth-child(3) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('1234567890' , { delay: 100 });
cy.get('.ant-col-24 > .ant-btn').click()
    // cy.get('input[placeholder="Enter Password"]').type('Ariel12');
    // cy.get(".ant-btn").click()
    })
    })
