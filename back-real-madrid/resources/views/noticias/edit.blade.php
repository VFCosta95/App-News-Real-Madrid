@extends('layout.app')

@section('title',)

@section('content')
    
    <div class="container mt-5">
        <h1>Editar</h1>
        <hr>

        <form action="{{ route('noticia-update', ['id' => $noticia->id]) }}" method="post">
            @csrf
            @method('PUT')
            <div class="form-group">
                <div class="form-group">
                    <label for="nome">Titulo:</label>
                    <input type="text" class="form-control" name="titulo" value="{{ $noticia -> titulo }}" placeholder="Digite um titulo">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Sub Titulo:</label>
                    <input type="text" class="form-control" name="subTitulo" value="{{ $noticia -> subTitulo }}" placeholder="Digite o Sub Titulo">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 1:</label>
                    <input type="text" class="form-control" name="p_Um" value="{{ $noticia -> p_Um }}" placeholder="Digite o Paragrafo 1">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 2:</label>
                    <input type="text" class="form-control" name="p_Dois" value="{{ $noticia -> p_Dois }}" placeholder="Digite o Paragrafo 2">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 3:</label>
                    <input type="text" class="form-control" name="p_Tres" value="{{ $noticia -> p_Tres }}" placeholder="Digite o Paragrafo 3">
                </div>
                <br>
                
                <div class="form-group">
                    <label for="nome">Paragrafo 4:</label>
                    <input type="text" class="form-control" name="p_Quatro" value="{{ $noticia -> p_Quatro }}" placeholder="Digite o Paragrafo 4">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 5:</label>
                    <input type="text" class="form-control" name="p_Cinco" value="{{ $noticia -> p_Cinco }}" placeholder="Digite o Paragrafo 5">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 6:</label>
                    <input type="text" class="form-control" name="p_Seis" value="{{ $noticia -> p_Seis }}" placeholder="Digite o Paragrafo 6">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Paragrafo 7:</label>
                    <input type="text" class="form-control" name="p_Sete" value="{{ $noticia -> p_Sete }}" placeholder="Digite o Paragrafo 7">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Nome da fonte da noticia:</label>
                    <input type="text" class="form-control" name="fonte" value="{{ $noticia -> fonte }}" placeholder="Digite o nome da fonte da noticia">
                </div>
                <br>
                
                <div class="form-group">
                    <label for="nome">Data e Hora:</label>
                    <input type="text" class="form-control" name="dataHora" value="{{ $noticia -> dataHora }}" placeholder="">
                </div>
                <br>

                <div class="form-group">
                    <label for="nome">Endereço Foto:</label>
                    <input type="text" class="form-control" name="foto" value="{{ $noticia -> foto }}" placeholder="Endereço da Foto">
                </div>
                <br>

                <div class="form-group">
                    <input type="submit" name="submit" class="btn btn-primary">
                </div>
            </div>
        </form>

    </div>

@endsection