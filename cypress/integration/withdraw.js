context('提币测试', () => {
    it('访问交易所页面，验证提币功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入提现页面
        cy.visit('http://localhost:8080/#/withdrawal').then(() => {
            cy.wait(3000);
            cy.get(".coin_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','ETH').click();
            cy.get(".network_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','ERC20').click();
            cy.get(".address_sel").click().should('be.visible');
            cy.get('.text-white.cursor-default.select-none.relative').eq(1).click();
            cy.get(".amount").should("exist").type("0.1");
            cy.get('.submit').should("exist").click();
        });
      });
    });
  });