context('充值测试', () => {
    it('访问交易所页面，验证充值功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入充值页面
        cy.visit('http://localhost:8080/#/deposit').then(() => {
            cy.wait(3000);
            cy.get(".coin_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','ETH').click();
            cy.get(".network_sel").click().should('be.visible');
            cy.contains('.font-light.text-white.truncate','ERC20').click();
            cy.get(".address").should("exist").type("0xa1E77451C34264d019E2c327b753450f5ef432e2");
            cy.get(".amount").should("exist").type("1");
            cy.get('.submit').should("exist").click();
        });
      });
    });
  });