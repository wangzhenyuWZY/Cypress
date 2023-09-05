context('Overview导出测试', () => {
    it('访问交易所页面，验证Overview导出功能', () => {
      cy.visit('http://localhost:8080/#/login').then(() => {
        // 2. 输入账号密码
        cy.get(".userName").should("exist").type("16666666666");
        cy.get(".password").should("exist").type("Wangzhenyu!369");
        // 3. 点击登录
        cy.get(".logIn").contains("Submit").should("exist").click();
        cy.wait(3000);
        // 4. 进入Overview页面
        cy.visit('http://localhost:8080/#/settings/finance/overview').then(() => {
            // 5. 导出
            cy.get('.exportBtn').should("exist").click().should('be.visible');
            cy.get('.wallet_sel').click().should('be.visible');
            cy.contains('.font-normal.block.truncate','SPOT-FUNDING').click();
            cy.get('.el-input__inner').should("exist").type("2023-07-25");
            cy.get('.exportBtn').should("exist").click();
        });
      });
    });
  });