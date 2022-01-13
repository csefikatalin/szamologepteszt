const { test } = QUnit

QUnit.module('Összeadás', function (h) {
  h.before(() => {
    this.szamologep = new Szamologep()
  })
  test('létezik-e az Összeadás függvény? ', (assert) => {
    assert.ok(this.szamologep.osszead, 'Létezik!')
  })

  test('létezik-e az Összeadás függvény? ', (assert) => {
    assert.ok(typeof this.szamologep.osszead === 'function', 'Függvény!')
  })

  test('Két pozitív szám', (assert) => {
    assert.equal(this.szamologep.osszead(1, 2), 3)
  })
  test('pozitív szám, 0', (assert) => {
    assert.equal(this.szamologep.osszead(1, 0), 1)
  })
  test('pozitív és negatív szám', (assert) => {
    assert.equal(this.szamologep.osszead(1, -2), -1)
  })
  test('pozitív és negatív szám', (assert) => {
    assert.equal(this.szamologep.osszead(-1, 2), +1)
  })
  test('szövegként megadott szám', (assert) => {
    assert.equal(this.szamologep.osszead(1, '2'), 3)
  })
  test('szövegként megadott negatív szám', (assert) => {
    assert.equal(this.szamologep.osszead(1, '-2'), -1)
  })
  test('szöveges paraméter', (assert) => {
    assert.equal(
      this.szamologep.osszead(1, 'a'),
      'Legalább az egyik pareméter nem szám!',
    )
  })

  test('Nagy szám', (assert) => {
    assert.equal(
      this.szamologep.osszead(1, Number.MAX_SAFE_INTEGER),
      'Túlcsordulás!',
    )
  })
  test('Legkisebb szám ', (assert) => {
    assert.equal(
      this.szamologep.osszead(-1, Number.MIN_SAFE_INTEGER),
      'Túlcsordulás!',
    )
  })
})

QUnit.module('Kivonás', function (h) {
  h.before(() => {
    this.szamologep = new Szamologep()
  })
})
