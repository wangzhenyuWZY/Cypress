context('还款测试', () => {
    it('访问交易所页面，验证还款功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入security页面
        cy.visit('http://localhost:8080/#/order-center').then(() => {
            // 5. 点击借款tab
            cy.get('.borrow_tab').should("exist").click();
            cy.wait(3000);
            cy.get('.repay_btn').first().should('exist').click();
            cy.wait(3000);
            cy.get(".coin_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','BTC').click();
            cy.get(".repay_num").should("exist").type("0.1");
            cy.get('.submit_btn').should("exist").click();
        });
      });
    });
  });