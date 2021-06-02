import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Style from './style.js';

export default function App() {

  const [city_name,setCity] = useState("");     //
  const [city_temp,setTemp] =  useState(0.0);
  const [city_wind,setWind] =  useState(0.0);

  const kelvin = 273;

  const [celsius_temp,setCelsiusTemp] = useState(0.0);
  const [km_speed,setKmSpeed] = useState(0.0);

    fetch('https://api.openweathermap.org/data/2.5/weather?id=6322598&appid=e96f5585e48b620c661f90b97652062f')
    .then(response => response.json())
    .then(function(json){

      //alert(json.id)

      setCity(json.name);
      setTemp(json.main.temp);
      setWind(json.wind.speed);

      /* Está carregando os valores das variáveis com os da API
         antes de usarmos o método loadInfo(), pois precisamos
         ter os valores iniciais antes de converte-los.
      */
    })  

  const loadInfo = () =>{

      // Convertendo os valores usando variáveis locais.

      var calculate_celsius_temp  = (city_temp - kelvin);
      var calculate_km_speed      = (city_wind * 1.609);

      // Formatando os valores

      setCelsiusTemp(calculate_celsius_temp.toFixed(2));
      setKmSpeed(calculate_km_speed.toFixed(2));
  }

  return (
    <View style={Style.container}>

      <Text style={{color: '#18576B', marginTop: '10%' ,textAlign: 'center', textTransform: 'uppercase', fontSize: 24,}}>Api REQUEST</Text>
      
      <TouchableOpacity onPress={()=> loadInfo()}>
        <Text style={Style.textButton}>Clique para ver as informações de Sorocaba!</Text>
      </TouchableOpacity>

      <View style={Style.infoView}>
        <Text style={Style.infoText}>{"Nome: " + city_name }</Text>
        <Text style={Style.infoText}>{"Temperatura atual: " + celsius_temp + '°C'}</Text>
        <Text style={Style.infoText}>{"Velocidade do vento: " + km_speed + ' Km/h'}</Text>
      </View>

    </View>
  );
}
