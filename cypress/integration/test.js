context('登录功能测试', () => {
    it('访问交易所页面，验证登录功能', () => {
      cy.visit('http://dev.nexusftx.com:8801/#/').then(() => {
        // 1. 点击Login in
        cy.get(".loginIn").contains("Log In").should("exist").click();
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        // 4. 验证
      });
    });
  });