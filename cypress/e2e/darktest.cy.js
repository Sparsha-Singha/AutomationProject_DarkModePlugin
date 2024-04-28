/// <reference types = "cypress"/>

Cypress.config('defaultCommandTimeOut', 10000)
import 'cypress-if' // conditional plugin

// describe mehthod
describe('Dark mode plugin testing', () => {
    let wusername, wpassword;
    beforeEach('Login Process',()=>{
        wusername=Cypress.env('userName');
        wpassword=Cypress.env('passWord');
        cy.viewport(1026, 660)
        cy.visit('wp-login.php')
        cy.wait(1000)
        cy.get('#user_login').type(wusername)
        cy.get('#user_pass').type(wpassword)
        cy.get('#wp-submit').click();
    })
    it('Checking weather the WP Dark Mode plugin is active or not', () => {
        
        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click()
        cy.wait(1000)
        cy.get('.subsubsub > .active > a').click()
        // cy.get('.wp-list-table').should('be.contain','WP Dark Mode')
        cy.get('.wp-list-table').contains('WP Dark Mode')
            .if('visible')
            .then(() => {
                cy.log('"WP Dark Mode" plugin is active')
            })
            .else()
            .then(() => {   
                cy.log('"WP Dark Mode" plugin is not active')
                cy.get('.inactive > a').click()
                cy.get('.wp-list-table').contains('WP Dark Mode')
                .if('visible')
                .then(() => {
                    cy.log('"WP Dark Mode" plugin is Installed but inactive')
                    cy.get('[data-slug="wp-dark-mode"] > .plugin-title > .row-actions').contains('Activate').click()
                    // cy.get('.button-primary').click()
                })
                .else()
                .then(() =>{
                    cy.log('"WP Dark Mode" plugin is not installed')
                    cy.get('.page-title-action').click()
                    cy.get('#search-plugins').type('WP Dark Mode')
                    cy.wait(7000)
                    cy.get('.plugin-card-wp-dark-mode > .plugin-card-top > .action-links > .plugin-action-buttons').contains('Install Now',{timeout: 10000}).click()
                    cy.wait(7000)
                    cy.get('.plugin-card-wp-dark-mode > .plugin-card-top > .action-links > .plugin-action-buttons').contains('Activate',{timeout: 40000}).click()
                })

            })
    })

    it('Enabling Admin Dashboard Dark Mode and Validate whether it is working or not on the Admin Dashboard.', ()=>{
        
        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click()
        cy.get('[data-slug="wp-dark-mode"] > .plugin-title > .row-actions').contains('Settings').click()
        cy.xpath("//a[normalize-space()='Admin Panel Dark Mode']").click()
        cy.xpath("//div[@class='relative w-10 h-full rounded-full transition duration-100 bg-slate-200']").click()
        cy.xpath("//button[normalize-space()='Save Changes']").click()
        cy.get('#menu-dashboard > .wp-has-submenu > .wp-menu-name').click()
        cy.xpath("//span[normalize-space()='Dark']").click({force: true})
        cy.get('html').should('have.class', 'wp-dark-mode-active')
        cy.log('The Darkmode is working on the Admin Dashboard')
        
    })

    it('Changing Floating Switch Style', ()=>{
        cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click()
        cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex').click()
        cy.get('[href="#/switch"]').click()
        cy.get('.rounded.gap-6 > .rounded > .flex-wrap > :nth-child(3)').click()
        cy.get('.bg-blue-500').click()
        
    })

    it('Switch Size Customization', ()=>{
        cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click()
        cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex').click()
        cy.get('[href="#/switch"]').click()
        cy.xpath("//div[@class='rounded text-base flex flex-col gap-3 bg-white']//div[6]").click()
        cy.wait(1000)
        cy.get('.py-5 > .gap-3 > .items-center.gap-2 > .gap-2').find('input').clear().type('220')
        cy.get('.bg-blue-500').click()
        
    })

    it('Changing Switch Position', ()=>{
        cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click()
        cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex').click()
        cy.get('[href="#/switch"]').click()
        cy.get(':nth-child(2) > .bg-gray-50 > .bg-gray-100').click()
        cy.get('.bg-blue-500').click()
    })
    it('Disabling Keyboard Shortcut', ()=>{
        cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click()
        cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex').click()
        cy.get(':nth-child(3) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between').click()
        cy.get('[href="#/accessibility"]').click()
        cy.xpath("//div[@class='relative w-10 h-full rounded-full transition duration-100 bg-blue-600']").click()
        cy.get('.save-buttons > .bg-blue-500').click()
    })

    it('Changing Animation Effect', ()=>{
        cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click()
        cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex').click()
        cy.get('[href="#/animation"]').click()
        cy.xpath("//div[@class='relative w-10 h-full rounded-full transition duration-100 bg-slate-200']").click()
        cy.get('.rounded > :nth-child(3) > .flex').click()
        cy.get('.bg-blue-500').click()
    })

    it('Validation whether the Darkmode is working or not from the Frontend.', ()=>{
        cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click()
        cy.get('.router-link-active').click()
        cy.get(':nth-child(2) > .items-center > .flex').click()
        cy.get('.bg-blue-500').click()
        cy.wait(1000)
        cy.get('#wp-admin-bar-site-name > [aria-expanded="false"]').click()
        cy.get('html').should('have.attr', 'data-wp-dark-mode-active')
        cy.log('The Darkmode is working from the Frontend')
    })
        
})
    
    