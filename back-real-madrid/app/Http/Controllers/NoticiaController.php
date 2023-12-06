<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Noticia;

class NoticiaController extends Controller
{
    // 
    public function index(){
        $noticias = Noticia::all();
        return view('noticias.index',['noticia' => $noticias]);
    }

    // Create
    public function create(){
        return view('noticias.create');
    }

    // Store
    public function store(Request $request){
        Noticia::create($request -> all());
        return redirect()->route('noticia-index');
    }

    // Edit
    public function edit($id){
        $noticias = Noticia::where('id', $id) ->first();
        if(!empty($noticias)){
            return view('noticias.edit', ['noticia' => $noticias]);
        }else{
            return redirect()->route('noticia-index');
        }
    }

    // Update
    public function update(Request $request, $id){
        $data = [
            'titulo' => $request -> titulo,
            'subTitulo' => $request -> subTitulo,
            'p_Um' => $request -> p_Um,
            'p_Dois' => $request -> p_Dois,
            'p_Tres' => $request -> p_Tres,
            'p_Quatro' => $request -> p_Quatro,
            'p_Cinco' => $request -> p_Cinco,
            'p_Seis' => $request -> p_Seis,
            'p_Sete' => $request -> p_Sete,
            'fonte' => $request -> fonte,
            'dataHora' => $request -> dataHora,
            'foto' => $request -> foto
        ];

        Noticia::where('id', $id) ->  update($data);
        return redirect() -> route('noticia-index');
    }

    //Delete - Deletar todos os Registros.
    public function destroy($id){
        Noticia::where('id', $id) -> delete();
        return redirect() -> route('noticia-index');
    }

    //Arquivos JSON
    public function all() {
    $arquivo = Noticia::all(); // Pegar todos os dados da tabela do banco 
    return response()->json($arquivo); // Tranformar em JSON
    }

    

}
