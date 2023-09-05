context('跨模块转账测试', () => {
    it('访问交易所页面，验证合约钱包跨模块转账功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入Overview页面
        cy.visit('http://localhost:8080/#/settings/finance/overview').then(() => {
            // 5. 转账
            cy.get('.swap_wallet').should("exist").click();
            cy.wait(3000);
            cy.get('.crossModules').should("exist").click();
            cy.get('.transfer_icon').should("exist").click();
            cy.get(".coin_sel").click().should('be.visible');
            cy.contains('.bg-background-0.overflow-auto.absolute','USDT').click();
            cy.wait(3000);
            cy.get(".wallet_from").click().should('be.visible');
            cy.get('.bg-background-0.overflow-auto.absolute').should('be.visible').children().first().click();
            cy.get(".wallet_to").click().should('be.visible');
            cy.get('.bg-background-0.overflow-auto.absolute').should('be.visible').children().first().click();
            cy.get(".transfer_amount").should("exist").type("1");
            cy.get('.submit_btn').should("exist").click();
        });
      });
    });
  });