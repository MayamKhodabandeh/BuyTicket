let cityArray = {
    Iran: ['tehran', 'tabriz', 'mashhad', 'shiraz'],
    Canada: ['vancouver', 'torento'],
    USA: ['newyork', 'losangles', 'bostoon'],

}

let countrySelect = document.querySelector('.countrySelect')
let citySelectValue = document.querySelector('.citySelect')
countrySelect.addEventListener('change', function countrySelectFunction() {
    if( countrySelect.value!="Please Select"){
        let optionValue = countrySelect.value
        let cityoption = cityArray[optionValue]
        citySelectValue.innerHTML = ''
        cityoption.forEach(function (city) {
            citySelectValue.innerHTML += '<option>' + city + '</option>'
        })

    }else{
        citySelectValue.innerHTML = ''
        citySelectValue.innerHTML += '<option>Select City...</option>'
    }
})

