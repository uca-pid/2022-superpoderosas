const userRegistredEventDescription = () =>{
    return {title: "Te has unido a la Comunidad!", description: "" }
}

const newSubscriptionEvenctDescription = (subscripcion) =>{
    return {title: "Te has subscipto!", description: "Has iniciado una subscripicón de "+subscripcion.amount+" que tiene como proóxima fecha de pago "+subscripcion.nextPaymentDate }
}

const cancelledSubscriptionEvenctDescription = (subscripcion) =>{
    return {title: "Subscripcion cancelada", description: "Has cancelado una subscripción de "+subscripcion.amount+" que se cobraba "+subscripcion.frecuency}
}

const pausedSubscriptionEvenctDescription = (subscripcion) =>{
    return {title: "Subscripcion pausada", description: "Has cancelado una subscripción de "+subscripcion.amount+" que se cobraba "+subscripcion.frecuency }
}

const modificationSubscriptionEvenctDescription = (subscripcion) =>{
    return {title: "Has modificado tu subscripcion", description: "El nuevo monto es de "+subscripcion.amount+", se cobra "+subscripcion.frecuency+ " y la próxima fecha de pago es "+subscripcion.nextPaymentDate }
}

const refferalEventDescription = (user) =>{
    return {title: "Has referido a un amigo!", description: "Has referido a"+user.name+" "+user.lastName }
}