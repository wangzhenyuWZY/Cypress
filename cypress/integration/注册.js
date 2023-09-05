context('注册功能测试', () => {
    it('访问注册页面，验证注册功能', () => {
      cy.visit('http://localhost:8080/#/sign-up').then(() => {
        //cy.intercept('POST', '/uc/mobile/code', { data: { phone:17777777778, country: '中国'  } }).as('getVerificationCode');
        // 1. 点击Phone
        cy.get(".phoneBtn").contains("Phone").should("exist").click();
        // 2. 选择国家输入手机号
        cy.get(".phoneSel").click().should('be.visible');
        cy.contains('.font-light.text-white.truncate','Afghanistan').click()

        // 生成随机手机号码
        const randomPhoneNumber = generateRandomPhoneNumber();
        cy.get(".phone").should("exist").type(randomPhoneNumber );
        // 3. 点击Next
        cy.get(".nextBtn").contains("Next").should("exist").click();
        // 4. 输入用户名密码
        cy.get(".otp_put").should("exist").type("999999");
        cy.get(".name_put").should("exist").type("Test");
        cy.get(".psd_put").should("exist").type("Wangzhenyu!369");
        cy.get(".re_psd_put").should("exist").type("Wangzhenyu!369");
        cy.get('[type="checkbox"]').check();
        cy.get(".registBtn").contains("Submit").should("exist").click();
        
      });
    });
    // 生成随机手机号码的函数
    function generateRandomPhoneNumber() {
        let phoneNumber = '1'; // 假设是中国的手机号码，以1开头
        for (let i = 0; i < 10; i++) {
            phoneNumber += Math.floor(Math.random() * 10); // 随机生成0-9之间的数字
        }
        return phoneNumber;
    }
  });