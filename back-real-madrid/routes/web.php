<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoticiaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
 
Route::get('/', [NoticiaController::class, 'index'])->name('noticia-index');
Route::get('/create', [NoticiaController::class, 'create'])->name('noticia-create');
Route::post('/store', [NoticiaController::class, 'store'])->name('noticia-store');
Route::get('/{id}/edit', [NoticiaController::class, 'edit'])-> where('id', '[0-9]+')->name('noticia-edit');
Route::put('/{id}', [NoticiaController::class, 'update'])-> where('id', '[0-9]+')->name('noticia-update');
Route::delete('/{id}', [NoticiaController::class, 'destroy'])-> where('id', '[0-9]+')->name('noticia-destroy');

Route::get('/all', [NoticiaController::class, 'all']) -> middleware('cors');
Route::middleware(['cors'])->group(function () {
    Route::get('/all', [NoticiaController::class, 'all']);
});
