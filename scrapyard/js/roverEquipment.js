
function getEquipment(){
	let equipment = [
        
        {"gear": "Backpack, waterskin, rovers toolkit, flint fire starter, hemp rope (50 feet), grappling hook, dried meat (5 days ration), sharpening stone, bone fishing hooks, small pouch filled with tea leaves"},
        {"gear": "Backpack, waterskin, rovers toolkit, flint fire starter, hemp rope (50 feet), wooden stakes, preserved fish (6 days ration), stone cutting tool, torches (x7), small sack"},
        {"gear": "Backpack, waterskin, rovers toolkit, flint fire starter, hemp rope (50 feet), grappling hook, small pouch filled with shinny stones, torches (x5), dried berries (3 days ration)"},
        {"gear": "Backpack, waterskin, rovers toolkit, flint fire starter, silk rope (50 feet), stone cutting tool, good luck charm, dried meat (6 days ration), sharpening stone"},
        {"gear": "Backpack, waterskin, rovers toolkit, flint fire starter, silk rope (50 feet), dried berries (4 days ration), sharpening stone, bone knife, bone fishing hooks, small sack"}
        
		];
	
		return equipment[Math.floor(Math.random() * equipment.length)]; 
		
}