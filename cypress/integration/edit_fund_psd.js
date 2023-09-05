context('修改登录密码测试', () => {
    it('访问交易所页面，验证修改资金密码功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入security页面
        cy.visit('http://localhost:8080/#/settings/account/security').then(() => {
            // 5. 点击修改
            cy.get('.edit_fund_psd').should("exist").click();
            cy.wait(2000);
            cy.get(".oldPassword").should("exist").type("123456");
            cy.get(".newPassword").should("exist").type("123456");
            cy.get(".newPasswordConfirm").should("exist").type("123456");
            cy.get('.next').should("exist").click();
            cy.get('.get_code').should("exist").click();
            cy.wait(3000);
            cy.get(".code").should("exist").type("999999");
            cy.get('.submit').should("exist").click();
        });
      });
    });
  });