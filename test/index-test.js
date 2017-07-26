describe('arrays', () => {
  var electives = ["photography", "ceramics", "music", "robotics", "web development", "independent study"]
  var electives_v2 = ["drama","art history","spanish","yearbook"]
  var numbers = [1,2,3,4,5,6,7,8,9,10]

  describe('countItems', () => {
    it('returns the count of the items in an array', () => {
      expect(countItems(electives)).toEqual(6)
      expect(countItems(electives_v2)).toEqual(4)
    })
  })

  describe('firstItem', () => {
    it('returns the first item in a given array', () => {
      expect(firstItem(electives)).toEqual("photography")
      expect(firstItem(electives_v2)).toEqual("drama")
    })
  })

  describe('lastItem', () => {
    it('returns the last item in a given array', () => {
      expect(lastItem(electives)).toEqual("independent study")
      expect(lastItem(electives_v2)).toEqual("yearbook")
    })
  })

  describe('alphabeticalFirst', () => {
    it('returns the first item when an array is alphabetized', () => {
      expect(alphabeticalFirst(electives)).toEqual("ceramics")
      expect(alphabeticalFirst(electives_v2)).toEqual("art history")
    })
  })

  describe('randomItem', () => {
    it('returns a random item a given array', () => {
      expect(["photography", "ceramics", "music", "robotics", "web development", "independent study"]).toInclude(randomItem(electives))
      expect(["drama","art history","spanish","yearbook"]).toInclude(randomItem(electives_v2))
    })
  })
  
  describe('removeItem', () => {
    it('pops off the last item in the array and prints the array', () => {
      expect(removeItem(electives)).toExist()
    })
  })
  
  describe('addItem', () => {
    it('pushes debate club onto the array then prints the array', () => {
      expect(addItem(electives)).toExist()
    })
  })

  describe('printItems', () => {
    it('prints out a numbered list of items in the array', () => {
      expect(printItems(electives)).toExist()
    })
  })
  
  describe('reverseEach', () => {
    it('returns an array where each item has been reversed', () => {
      expect(reverseEach(electives)).toInclude("yhpargotohp", "scimarec", "cisum", "scitobor", "tnempoleved bew", "yduts tnednepedni")
      expect(reverseEach(electives_v2)).toInclude("amard","yrotsih tra","hsinaps","koobraey")
    })
  })

  describe('sum', () => {
    it('sums the items in an array', () => {
      expect(sum(numbers)).toEqual(55)
    })
  })
  
  describe('average', () => {
    it('gives the mean of the items in the array', () => {
      expect(average(numbers)).toEqual(5.5)
    })
  })
  
  describe('lengthFinder', () => {
    it('gives the length of each item in the array', () => {
      expect(lengthFinder(electives)).toExist()
    })
  })
  
})
