import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
    const { control } = useFormContext();
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold">Image</h2>
                <FormDescription>
                    Add an image that will be displayed on your restaurant listing in the
                    search results. Ading a new image will overwrite the existing one.
                </FormDescription>
            </div>
            <div className="flex flex-col gap-8 w-[50%]">
                <FormField
                    control={control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="file" accept=".jpg, .jpeg, .png"
                                    onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default ImageSection;