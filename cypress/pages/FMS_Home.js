class FMS_Home{
    
    menuHome="//li[contains(text(),'Home')]";
    dashboard="//a[normalize-space()='Dashboard']";
    selectStartDate="select[id='leadStatsCustomRangeStart']";
    selectEndDate="select[id='leadStatsCustomRangeEnd']";
    updateStatistics="input[id='leadStatsSubmit']";

    navigateDashboard(startDate1,endDate1){
        cy.xpath(this.menuHome).trigger('mousehover').click();
        cy.xpath(this.dashboard);
        cy.get(this.selectStartDate).select(startDate1);
        cy.get(this.selectEndDate).select(endDate1);
        cy.get(this.updateStatistics).click();
        cy.wait(1000);
    }

}

export default FMS_Home;