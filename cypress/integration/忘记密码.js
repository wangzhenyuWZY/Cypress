context('忘记密码功能测试', () => {
    it('访问重置密码页面，验证重置密码功能', () => {
      cy.visit('http://localhost:8080/#/reset-password').then(() => {
        //cy.intercept('POST', '/uc/mobile/code', { data: { phone:17777777778, country: '中国'  } }).as('getVerificationCode');
        // 1. 点击Phone
        cy.get(".phoneBtn").contains("Phone").should("exist").click();
        // 2. 选择国家输入手机号
        cy.get(".phoneSel").click().should('be.visible');
        cy.contains('.font-light.text-white.truncate','China').click()

        // 生成随机手机号码
        cy.get(".phone_put").should("exist").type('17777777777');
        // 3. 点击Next/输入验证码/Next
        cy.get(".getCode").contains("Get Code").should("exist").click();
        cy.get(".otp_put").should("exist").type("999999");
        cy.get(".next").contains("Next").should("exist").click();
        // 4. 输入用户名密码
        cy.get(".psd_put").should("exist").type("Wangzhenyu!369");
        cy.get(".re_psd_put").should("exist").type("Wangzhenyu!369");
        cy.get(".submit").contains("Set New Password").should("exist").click();
        
      });
    });
});