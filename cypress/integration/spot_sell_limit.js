context('现货限价交易测试', () => {
    it('访问交易所页面，验证现货限价交易功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入交易页面
        cy.visit('http://localhost:8080/#/exchange/btc_usdt').then(() => {
            cy.wait(3000);
            cy.get(".sell_type_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','Limit Order').click();
            cy.get(".sell_amount").should("exist").type("0.5");
            cy.get('.sell_submit').should("exist").click();
        });
      });
    });
  });