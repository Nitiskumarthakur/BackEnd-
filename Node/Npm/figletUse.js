import figlet from 'figlet'

const printFiglet = async ()=>{
    const text = await figlet.text("SONALAL THAKUR");
    console.log(text)
}

printFiglet();