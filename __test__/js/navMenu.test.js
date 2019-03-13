const appMethods = require('../../js/navMenu')

describe('variable declaration test', function() {
    test('should set nav button', function() {
        let navButton = document.querySelectorAll('.burger');
        expect(navButton).toEqual(document.querySelectorAll('.burger'))
    })
})

describe('function testing', () => {
    let navElement;

    beforeEach(() => {
        //Arrange
        navElement = document.createElement('nav')
        navElement2 = document.createElement('nav')
        navElement3 = document.createElement('nav')
        navElement4 = document.createElement('nav')
        navElement5 = document.createElement('nav')
        navElement.classList.add('test-class')
        navElement2.classList.add('test-class')
        navElement3.classList.add('test-class')
        navElement4.classList.add('test-class')
        navElement5.classList.add('test-class')
        navElements = document.querySelectorAll('nav')
    })

    test('should toggle flex visibility of list of elements', () => {     
        //Assert
        expect(navElements.length).toEqual(5);
    })

    test('should toggle flex visibility of list of elements', () => {
        // Act
        appMethods.toggleFlexVisibilityMulti(navElements)

        //Assert
        expect(navElement.classList.contains('open-flex')).toBeTruthy();
    })

    test('should toggle flex visibility of one element', () => {
        // Act
        appMethods.toggleFlexVisibilitySingle(navElement)

        //Assert
        expect(navElement.classList.contains('open-flex')).toBeTruthy();
    })
})





