import AppError from "../../Utils/AppError";
import Film, { FilmInput, FilmOutput } from "../Models/filmModels";

export const getAll = async (): Promise<FilmOutput[]> => {
   return await Film.findAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
   const film = await Film.findByPk(id);

   if (!film) {
      throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
   }
   return film;
};

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
   return await Film.create(payload);
};

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
   const film = await Film.findByPk(id);
   if (!film) {
      throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
   }
   return await film.update(payload);

   // return model.update(payload,{
   //    where: {film_id: id}
   // });
};

export const deleteById = async (id: number): Promise<void> => {
   const film = await Film.findByPk(id);

   if (!film) {
      throw new Error("Registro nao encontrado!");
   }
   return await film.destroy();
}

