import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button variant="contained">Contained</Button>
      <input
        type="text"
        placeholder="Give your Challenge a name!"
        {...register("Give your Challenge a name!", { required: true })}
      />
      <select
        {...register("Select which charities to support", { required: true })}
      >
        <option value="Specify">Specify</option>
        <option value=" Effective*"> Effective*</option>
        <option value=" Any"> Any</option>
      </select>
      <input
        type="number"
        placeholder="Maximum total that you will match"
        {...register("Maximum total that you will match", {
          required: true,
          max: 9999999,
          min: 5,
          maxLength: 7,
        })}
      />
      <input
        type="number"
        placeholder="Maximum per person"
        {...register("Maximum per person", {
          required: true,
          max: 9999999,
          min: 5,
          maxLength: 7,
        })}
      />
      {/* TODO: set default to today */}
      <input
        type="datetime-local"
        placeholder="Start date"
        {...register("Start date", { required: true })}
      />
      {/* TODO: validate for future only, up to 1 year */}
      <input
        type="datetime-local"
        placeholder="End date"
        {...register("End date", {})}
      />

      <input type="submit" />
    </form>
  );
}
