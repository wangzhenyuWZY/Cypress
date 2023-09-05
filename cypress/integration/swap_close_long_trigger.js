context('合约限价交易测试', () => {
    it('访问交易所页面，验证合约委托平多功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入交易页面
        cy.visit('http://localhost:8080/#/swap/btc_usdt').then(() => {
            cy.wait(3000);
            cy.get(".close_long_type").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','Trigger Order').click();
            cy.get(".close_long_trigger_price").should("exist").type("29000");
            cy.get(".close_long_price").should("exist").type("29000");
            cy.get(".close_long_vol").should("exist").type("1");
            cy.get('.close_long_order').should("exist").click();
            cy.wait(3000);
            cy.get('.submit_btn').should("exist").click();
        });
      });
    });
  });