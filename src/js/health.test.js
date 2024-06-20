import { sortHealth } from "./app";

test('sortHealth', () => {
    expect(sortHealth([{name: 'мечник', health: 10},{name: 'маг', health: 100}]))
        .toEqual([{name: 'маг', health: 100}, {name: 'мечник', health: 10}])
    expect(sortHealth([{name: 'мечник', health: 10},{name: 'маг', health: 100}]))
        .not.toBe([{name: 'маг', health: 100}, {name: 'мечник', health: 10}])
    

    expect (sortHealth([{name: 'маг', health: 100}, {name: 'мечник', health: 10}]))
        .toEqual([{name: 'маг', health: 100}, {name: 'мечник', health: 10}])
    expect (sortHealth([{name: 'маг', health: 100}, {name: 'мечник', health: 10}]))
        .not.toBe([{name: 'маг', health: 100}, {name: 'мечник', health: 10}])

    expect (sortHealth([{name: 'маг', health: 100}]))
        .toEqual([{name: 'маг', health: 100}])
    expect (sortHealth([{name: 'маг', health: 100}]))
        .not.toBe([{name: 'маг', health: 100}])
    
    expect(sortHealth([]))
        .toEqual([])
    
    expect(sortHealth())
    .toEqual([])
})