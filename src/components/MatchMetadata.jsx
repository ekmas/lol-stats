import React from 'react'
import { queueIdArray } from '../data';

export default function MatchMetadata({ match, remake, won }) {

let gameDate = match.info.gameEndTimestamp;
let seconds = match.info.gameEndTimestamp !== undefined;

let getGameMode = (queueID) => {
    let target = queueIdArray.find((e) => e.queueId === queueID)

    if(target === null || target === undefined){
        return 'Normal'
    }else{
        return target.description
    }

    // sometimes when we are fetching match info, we dont't get gamemode so we set it to normal.
}

let handleWhenWasPlayed = (gameDate) => {
    if(gameDate === undefined){
        return ''
    }

    let matchDate = new Date(gameDate);
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - matchDate);

    let diffYears = Math.round(diffTime / (1000 * 60 * 60 * 24 * 7 * 4.3 * 12));
    let diffMonths = Math.round(diffTime / (1000 * 60 * 60 * 24 * 7 * 4.3));
    let diffWeeks = Math.round(diffTime / (1000 * 60 * 60 * 24 * 7));
    let diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    let diffHours = Math.round(diffTime / (1000 * 60 * 60));
    let diffMinutes = Math.round(diffTime / (1000 * 60));
    let diffSeconds = Math.round(diffTime / (1000));

    // we are subtracting current date by matchDate so we can get time difference

    if(diffYears > 0 && diffMonths > 11){
        if(diffYears === 1){
            return 'a year ago';
        }
    }else if(diffMonths > 0 && diffWeeks > 4){
        if(diffMonths === 1){
            return 'a month ago'
        }else{
            return `${diffMonths} months ago`
        }
    }else if(diffWeeks > 0 && diffDays > 6){
        if(diffWeeks === 1){
            return 'a week ago'
        }else{
            return `${diffWeeks} weeks ago`
        }
    }else if(diffDays > 0 && diffHours > 23){
        if(diffDays === 1){
            return 'a day ago'
        }else{
            return `${diffDays} days ago`
        }
    }else if(diffHours > 0 && diffMinutes > 59){
        if(diffHours === 1){
            return 'an hour ago'
        }else{
            return `${diffHours} hours ago`
        }
    }else if(diffMinutes > 0){
        if(diffMinutes === 1){
            return 'a minute ago'
        }else{
            return `${diffMinutes} minutes ago`
        }
    }else{
        if(diffSeconds === 1){
            return 'a second ago'
        }else{
            return `${diffSeconds} seconds ago`
        }
    }
}

let handleGameMinutes = (gameDuration, seconds) => {
    if(!seconds){
        gameDuration = gameDuration / 1000
    }
    return Math.floor(gameDuration / 60)

    // gameDuration can be either expressed in seconds or in miliseconds

    // if seconds is true gameDuration is expressed in seconds, and if it's false gameDuration is expressed in miliseconds
}

let handleGameSeconds = (gameDuration, seconds) => {
    if(!seconds){
        gameDuration = gameDuration / 1000;
    }
    return (gameDuration % 60).toFixed(0) > 9 ? (gameDuration % 60).toFixed(0) : '0' + (gameDuration % 60).toFixed(0)

    // same as previous function but we are adding 0 to the left in case seconds are single digit value
}

  return (
    <div className="flex flex-col items-center text-black dark:text-white text-sm w-[100px] m650:absolute m650:flex-row m650:w-full m650:left-0 m650:px-5 m650:items-center m650:justify-between m650:top-4 m400:px-2.5">
        <h4 className='font-medium m650:mr-5 m400:text-xs'>{getGameMode(match.info.queueId)}</h4>
        <p className='text-xs mt-[4px] mb-[6px] m650:m-0'>{handleWhenWasPlayed(gameDate)}</p>
        <div className="flex items-center m650:hidden">
            <p className='mr-2 font-medium'>{remake ? 'Remake' : won ? 'Victory' : 'Defeat'}</p> <p>{handleGameMinutes(match.info.gameDuration, seconds)}:{handleGameSeconds(match.info.gameDuration, seconds)}</p>
        </div>
    </div>
  )
}