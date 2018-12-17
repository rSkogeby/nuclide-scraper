// Scraper for nuclide data
const puppeteer = require("puppeteer");
let scraperFun = require("table-scraper")

(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	const url = 'http://nucleardata.nuclear.lu.se/toi/listnuc.asp?sql='
	await page.goto(url)

	const isotope = await page.evaluate(() =>
		Array.from(document.querySelectorAll("table tr th"), partner => partner.innerText.trim())
	)
	const tableVals = await page.evaluate(() =>
		Array.from(document.querySelectorAll("table tr td"), partner => partner.innerText.trim())
	)
		
	console.log(isotope)
	console.log(tableVals)

	await browser.close()
})()