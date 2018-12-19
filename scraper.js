// Scraper for nuclide data
const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	// Nuclide data, decay rates, emissions etc.
	const url_lu = 'http://nucleardata.nuclear.lu.se/toi/listnuc.asp?sql='
	// Atomic properties
	const url_pdg = 'http://pdg.lbl.gov/2018/AtomicNuclearProperties/index.html'
	// Electron stopping power in matter
	const url_estar = 'https://physics.nist.gov/PhysRefData/Star/Text/ESTAR.html'
	// Proton stopping power in matter
	const url_pstar = 'https://physics.nist.gov/PhysRefData/Star/Text/PSTAR.html'
	// Alpha particle stopping power in matter
	const url_astar = 'https://physics.nist.gov/PhysRefData/Star/Text/ASTAR.html'
	await page.goto(url_estar,{waitUntil: 'networkidle2'})

	// Scrape LU for nuclide data: Headers
/* 	await page.waitForSelector("table tr th")
	const isotope = await page.evaluate(() =>
		Array.from(document.querySelectorAll("table tr th"), partner => partner.innerText.trim())
	) */

	// Scrape LU for nuclide data: Paragraph
/* 	await page.waitForSelector("table tr td")
	const tableVals = await page.evaluate(() =>
		Array.from(document.querySelectorAll("table tr td"), partner => partner.innerText.trim())
	) */

	// Scrape url_estar
	await page.waitForSelector("form select")
	const dropdown = await page.evaluate(() =>
		Array.from(document.querySelectorAll("form select"), partner => partner.innerText.trim().split('\n'))
	)

	// Scrape url_pstar
	await page.waitForSelector("form select")
	const 

	console.log(dropdown)

	await browser.close()
})()