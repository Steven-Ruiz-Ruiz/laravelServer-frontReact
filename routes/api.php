<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Creamos 4 rutas, 2 seran publicas y 2 seran privadas 

Route::group([
    'prefix' => 'auth'
], function(){

    // RUTAS PUBLICAS
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('index','PublicationController@index');
    Route::post('filterCity','PublicationController@filterCity');
    Route::post('filterCommunity','PublicationController@filterCommunity');

    Route::group([
        'middleware'=>'auth:api'
    ], function (){

        //RUTAS PRIVADAS
        Route::get('logout','AuthController@logout');
        Route::get('user','AuthController@user');
        Route::post('create','PublicationController@store');
        Route::put('update/{id}','PublicationController@update');
        Route::delete('destroy/{id}','PublicationController@destroy');
        }
    );
});