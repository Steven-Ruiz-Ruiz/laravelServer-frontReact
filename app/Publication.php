<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    protected $fillable = [
        'user_id','title','publication','city','community'
    ];


// RELACION INVERSA PUBLICACIONES A USUARIO
    public function user(){
        return $this->belongsTo('App\User');
    }
}
