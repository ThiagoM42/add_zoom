class addParticipante{
	constructor(tag_button){	
		this.tag_button = tag_button		
		this.div_pai= document.querySelector('.participants-section-container')			
		this.addZoom()
		this.observer()
		
	}
	addZoom(){
	    this.admissao =  document.querySelectorAll(`${this.tag_button}`)
		console.log("passou pela primeira parte do addZoom")
		if(this.admissao){
			const button_admitir = this.admissao[1]

			if(button_admitir.textContent === "Admitir"){
			   console.log("admitir if")
				button_admitir.click()
			}
			else{
				let button_admitir_todos = Array.from(this.admissao).filter(d=>d.innerText === 'Admitir todos')[0]
				if(button_admitir_todos){
					button_admitir_todos.click()
				}				
			}			
		}
	}

	 observer(){
		try{			
			let observer = new MutationObserver(()=>this.addZoom())
			//let observer = new MutationObserver(()=>console.log('teste'))
			observer.observe(this.div_pai, {childList:true});			
		}catch(error){
			console.log("Habilitar a lista de participantes.")											
			setTimeout(function(){new addParticipante('button')}, 6000)
		}
	}
}

new addParticipante('button')