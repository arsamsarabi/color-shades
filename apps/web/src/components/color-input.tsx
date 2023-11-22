import { Button } from '@mantine/core';

export const ColorInput = () => {
  return (
    <div className="">
      <form>
        <label htmlFor="color">Color</label>
        <input id="color" type="text" />
        <Button type="submit">Generate shades</Button>
      </form>
    </div>
  );
};
