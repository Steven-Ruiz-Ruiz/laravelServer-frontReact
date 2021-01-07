<?php

namespace App\Http\Controllers;

use App\Publication;
use App\User;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Publication::all()  ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title'=> 'required',
            'publication'=>'required',
            'city'=>'required',
            'community'=>'required'
        ]);

        $publication = new Publication();
        $publication->title = $request->title;
        $publication->publication = $request->publication;
        $publication->city = $request->city;
        $publication->community = $request->community;

        if(auth()->user()->publications()->save($publication))
            return response()->json([ 
                "success"=> true,
                "data"=> $publication->toArray()
            ]);
        else
            return response()->json([
                "success"=> false,
                "message"=> "Publication no added"
            ],500);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function filterCity(Request $request)
    {
        $publication = Publication::where('city',$request->city)->get();
        return response()->json([
            'data'=> $publication
        ]); 
    }
    public function filterCommunity(Request $request)
    {
        $publication = Publication::where('community',$request->community)->get();
        return response()->json([
            'data'=> $publication
        ]); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function edit(Publication $publication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $publication = auth()->user()->publications()->find($id);

        if(!$publication){
            return response()->json([
                "success" => false,
                "message" => "publication not found"
            ],400);
        }

        $updated = $publication->fill($request->all())->save();

        if($updated)
            return response()->json([
                "success" => true
            ]);
        else
            return response()->json([
                "success" => false,
                "message" => "Publication can not be update"
            ],500);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Publication  $publication
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $publication = auth()->user()->publications()->find($id);
        if(!$publication){
            return response()->json([
                'success'=> false,
                'message'=>'Publication not found'
            ],400);
        }
        if($publication->delete()){
            return response()->json([
                'success'=> true
            ]);
        }else{
            return response()->json([
                'success'=> false,
                'message'=>'Publication can not be deleted'
            ],500);  
        }
    }
}
