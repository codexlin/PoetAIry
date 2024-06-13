export function notFound() {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center px-10">
      <p className="text-muted-foreground mt-2">
        Page not found Or Permission denied, contact owner of this resource.
      </p>
      <p className="text-muted-foreground mt-2">
        If you consider this a bug, please contact us at{" "}
      </p>
    </div>
  )
}

export default notFound
