context('设置手机号码测试', () => {
    it('访问交易所页面，验证设置手机号码功能', () => {
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
            cy.get('.set_phone').should("exist").click();
            cy.wait(2000);
            cy.get(".country_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','Afghanistan').click();
            cy.get(".phone_num").should("exist").type("18555555555");
            cy.get('.get_code').should("exist").click();
            cy.get(".code").should("exist").type("999999");
            cy.get(".login_psd").should("exist").type("Wangzhenyu!369");
            cy.get('.submit').should("exist").click();
        });
      });
    });
  });