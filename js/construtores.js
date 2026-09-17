class Selo {
    constructor(nomeSelo, descriSelo, imgSelo){
        this.nomeSelo = nomeSelo
        this.descriSelo = descriSelo
        this.imgSelo = imgSelo
    }
}

class Usuario{
    constructor(nomeYou,nomeZZZ){
        this.nomeYou = nomeYou
        this.nomeZZ = nomeZZZ
        this.usuSelos = []
        this.usuDescri = ""
    }
}


export {Selo,Usuario}