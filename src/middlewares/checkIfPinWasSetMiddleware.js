import API from "@/config/API";

export default async (to, from, next) => {
    const response = await API.get('profile')

    const {current_step: currentStep} = response.data

    if (currentStep === 1 && to.name === 'pincode') {
        next({name: 'home'})
    }

    if (currentStep === 0 && to.name !== 'pincode') {
        next({name: 'pincode'})
    }


    next()
}