import {Builder, By, Key} from "selenium-webdriver";
import {should} from "chai";
should()

describe("Adicionar tarefas", function() {

    it("Adicionar 10 tarefas e validar", async function() {
        // Abrir o navegador
        let driver = await new Builder().forBrowser("firefox").build();

        // Navegar até o site
        await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

        // Lista de Tarefas
        let listaDeTarefas = ["Aprender Selenium", "Aprender JavaScript", "Aprender HTML", "Aprender CSS", "Aprender Cypress",
        "Aprender Postman", "Aprender a cozinhar", "Aprender espanhol", "Aprender inglês", "Montar LinkedIn"]

        // For para criação de tarefas
        for (let i = 0; i < listaDeTarefas.length; i++) {
            await driver.findElement(By.id('inputTask')).sendKeys(listaDeTarefas[i], Key.ENTER);
        }

        // Assertion / Validação
        let seleniumText, javascriptText, HTMLtext, CSSText, cypressText, postmanText, cookingText, spanishText, englishText, linkedinText;

        let varTexts = [`${seleniumText}, ${javascriptText}, ${HTMLtext}, ${CSSText}, ${cypressText}, ${postmanText}, ${cookingText}, ${spanishText}, ${englishText}, ${linkedinText}`]

        for (let i = 1; i < varTexts.length; i++) {
            await driver.findElement(By.xpath(`/html/body/div/section/ul/li[${i}]`)).getText()
            .then(function(value){
                return value
            });
        }
        
        // Assertion em Chai
        for (let i = 1; i < varTexts.length; i++) {
            varTexts[i].should.equal(listaDeTarefas[i])
        }
        
        // Fechar o navegador
        await driver.quit()
    })
})