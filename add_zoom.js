class addParticipante{
	constructor(tag_button){	
		this.tag_button = tag_button				
		this.addZoom()
		this.observer()
		
	}
	addZoom(){
		try{
			this.admissao =  document.querySelectorAll(`${this.tag_button}`)
			this.div_pai= document.querySelector('.participants-section-container')	
			if(!this.div_pai){
				throw new Exception("##### Abrir a Aba de Participants  ########")
			}
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
					}else{
						throw new Exception("##### Abrir a Aba de Participants  ########")
					}				
				}			
			}			
		}catch(error){
			console.log("Habilitar a lista de participantes. 2")											
			setTimeout(function(){new addParticipante('button')}, 6000)			
		}
	}

	 observer(){
		try{			
			if(!this.div_pai){
				throw new Exception("Aba Participants")
			}
			let observer = new MutationObserver(()=>this.addZoom())
			//let observer = new MutationObserver(()=>console.log('teste'))
			observer.observe(this.div_pai, {childList:true, subtree:true});			
		}catch(error){
			console.log("Habilitar a lista de participantes. 3")											
			setTimeout(function(){new addParticipante('button')}, 6000)
		}
	}
}

new addParticipante('button')