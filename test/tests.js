let expect = chai.expect

describe('total', function() {
  it('30 is 30', function() {
    expect(30).to.equal(30)
  })

  it('clickCost is a function', function () {
    expect(clickCost).to.be.a('function');
  })
  
})
