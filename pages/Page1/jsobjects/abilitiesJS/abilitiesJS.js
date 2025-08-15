export default {

	addAbility(currentItem) {
		let abilities = [];
		const existing = appsmith.store.selectedAbilities || [];
		return abilities = [...existing, currentItem];
	}
}