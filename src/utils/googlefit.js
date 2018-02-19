import React, { Component } from 'react';

let googlefit = {
  
    async getFitnessData(fitnessData){
         
        let data = {
            "aggregateBy": [{"dataTypeName":fitnessData.dataTypeName}],
            "bucketByTime":{"durationMillis":86400000},
            "startTimeMillis":fitnessData.startTimeMillis,
            "endTimeMillis":fitnessData.endTimeMillis
        };

        let userInfoResponse = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate?alt=json', {
            method: 'POST',
            headers: { Authorization: `Bearer ${fitnessData.accessToken}`,
                        'content-type': 'application/json'},
            body: JSON.stringify(data),
        });
        
        return userInfoResponse._bodyInit;
  
      },
      
  }
  
  module.exports = googlefit