import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai";
should();

// Bloco Describe
describe("Funcionalidade - Adicionar Tarefa", function() {
    // Bloco IT - Individual Tests
    it("TC01 - Criar uma tarefa", async function() {
        // Abrir o navegador
        let driver = await new Builder().forBrowser("firefox").build();
        
        // Navegar até o site
        await driver.get('https://herziopinto.github.io/lista-de-tarefas/')
        
        // Adicionar a tarefa - encontrar o elemento, digita o texto, apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)
        
        // Assertion / Validação
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]")).getText()
        .then(function(value){
            return value
        });
        
        seleniumText.should.equal("Aprender Selenium")
        
        // Fechar o navegador
        await driver.quit()

    })
    it("TC02 - Criar uma tarefa errada", async function() {
        // Abrir o navegador
        let driver = await new Builder().forBrowser("firefox").build();
        
        // Navegar até o site
        await driver.get('https://herziopinto.github.io/lista-de-tarefas/')
        
        // Adicionar a tarefa - encontrar o elemento, digita o texto, apertar enter
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN)
        
        // Assertion / Validação
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]")).getText()
        .then(function(value){
            return value
        });
        
        seleniumText.should.equal("Aprender Javascript")
        
        // Fechar o navegador
        await driver.quit()

    })
})

